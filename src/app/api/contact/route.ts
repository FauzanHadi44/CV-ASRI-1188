import { resend } from "@/lib/resend";
import { NextRequest, NextResponse } from "next/server";
import { render } from "@react-email/render";
import ContactEmail from "@/emails/ContactEmail";
import AutoReplyEmail from "@/emails/AutoReplyEmail";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, phone, message } = body;

        if (!name || !phone || !message) {
            return NextResponse.json(
                { error: "Nama, nomor telepon, dan pesan wajib diisi." },
                { status: 400 }
            );
        }

        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return NextResponse.json(
                { error: "Format email tidak valid." },
                { status: 400 }
            );
        }

        if (!resend) {
            return NextResponse.json(
                { error: "Email service belum dikonfigurasi." },
                { status: 500 }
            );
        }

        const contactEmail = process.env.CONTACT_EMAIL || "info.asri1188@gmail.com";

        const contactHtml = await render(
            ContactEmail({ name, email, phone, message })
        );
        const { error: sendError } = await resend.emails.send({
            from: "CV ASRI 1188 Website <noreply@asri1188.com>",
            replyTo: email || contactEmail,
            to: [contactEmail],
            subject: `[Pesan Website] dari ${name}`,
            html: contactHtml,
        });

        if (sendError) {
            console.error("Resend error (admin):", sendError);
            return NextResponse.json(
                { error: "Gagal mengirim email. Silakan coba lagi." },
                { status: 500 }
            );
        }
        if (email) {
            try {
                console.log("Sending auto-reply to:", email);
                const autoReplyHtml = await render(
                    AutoReplyEmail({ name })
                );

                const { data: replyData, error: replyError } = await resend.emails.send({
                    from: "CV ASRI 1188 <noreply@asri1188.com>",
                    replyTo: contactEmail,
                    to: [email],
                    subject: "Terima kasih! Pesan Anda sudah kami terima — CV ASRI 1188",
                    html: autoReplyHtml,
                });

                if (replyError) {
                    console.error("Auto-reply Resend error:", JSON.stringify(replyError));
                } else {
                    console.log("Auto-reply sent successfully, id:", replyData?.id);
                }
            } catch (replyError) {
                console.error("Auto-reply exception:", replyError);
            }
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Contact API error:", error);
        return NextResponse.json(
            { error: "Terjadi kesalahan server." },
            { status: 500 }
        );
    }
}
