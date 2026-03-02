import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Text,
    Section,
    Tailwind,
    Hr,
    Link,
} from "@react-email/components";

interface AutoReplyEmailProps {
    name: string;
}

export const AutoReplyEmail = ({ name }: AutoReplyEmailProps) => {
    return (
        <Html>
            <Head />
            <Preview>Terima kasih, {name}! Pesan Anda sudah kami terima.</Preview>
            <Tailwind>
                <Body className="bg-gray-100 font-sans">
                    <Container className="mx-auto my-10 max-w-[600px]">
                        {/* Header */}
                        <Section className="bg-[#0f265c] px-8 py-6 rounded-t-lg text-center">
                            <Heading className="text-white text-xl font-bold m-0">
                                CV ASRI 1188
                            </Heading>
                            <Text className="text-gray-300 text-sm m-0 mt-1">
                                Andalan, Solusi, Rantai, Industri
                            </Text>
                        </Section>

                        {/* Body */}
                        <Section className="bg-white px-8 py-8 border border-t-0 border-gray-200">
                            <Heading className="text-[#0f265c] text-lg font-bold m-0 mb-4">
                                Halo, {name}! 👋
                            </Heading>

                            <Text className="text-gray-700 text-sm leading-6">
                                Terima kasih telah menghubungi <strong>CV ASRI 1188</strong>. Pesan Anda sudah kami terima dengan baik.
                            </Text>

                            <Text className="text-gray-700 text-sm leading-6">
                                Tim kami akan segera meninjau pesan Anda dan menghubungi Anda kembali dalam waktu <strong>1x24 jam</strong> di hari kerja.
                            </Text>

                            <Section className="bg-blue-50 border border-blue-100 rounded-lg p-4 my-6">
                                <Text className="text-[#0f265c] text-sm font-semibold m-0 mb-2">
                                    Butuh respons lebih cepat?
                                </Text>
                                <Text className="text-gray-600 text-sm m-0">
                                    Hubungi kami langsung via WhatsApp:
                                </Text>
                                <Link
                                    href="https://wa.me/6281261490378"
                                    className="inline-block bg-green-500 text-white text-sm font-bold px-5 py-2 rounded-full mt-3 no-underline"
                                >
                                    💬 Chat WhatsApp
                                </Link>
                            </Section>

                            <Hr className="border-gray-200 my-6" />

                            <Text className="text-gray-700 text-sm leading-6">
                                Salam hangat,
                            </Text>
                            <Text className="text-[#0f265c] text-sm font-bold m-0">
                                Tim CV ASRI 1188
                            </Text>
                            <Text className="text-gray-500 text-xs m-0 mt-1">
                                Taman Asri Lama No.1, Cipadu Jaya, Larangan, Tangerang 15155
                            </Text>
                        </Section>

                        {/* Footer */}
                        <Section className="bg-gray-50 px-8 py-4 rounded-b-lg border border-t-0 border-gray-200">
                            <Text className="text-gray-400 text-xs text-center m-0">
                                Email ini dikirim secara otomatis. Mohon tidak membalas email ini.
                            </Text>
                            <Text className="text-gray-400 text-xs text-center m-0 mt-1">
                                © {new Date().getFullYear()} CV ASRI 1188
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default AutoReplyEmail;
