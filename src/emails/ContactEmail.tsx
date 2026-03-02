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
    Row,
    Column,
} from "@react-email/components";

interface ContactEmailProps {
    name: string;
    email?: string;
    phone: string;
    message: string;
}

export const ContactEmail = ({ name, email, phone, message }: ContactEmailProps) => {
    return (
        <Html>
            <Head />
            <Preview>📩 Pesan Baru dari {name} — CV ASRI 1188 Website</Preview>
            <Tailwind>
                <Body className="bg-gray-100 font-sans">
                    <Container className="mx-auto my-10 max-w-[600px]">
                        {/* Header */}
                        <Section className="bg-[#0f265c] px-8 py-6 rounded-t-lg">
                            <Heading className="text-white text-xl font-bold m-0">
                                📩 Pesan Baru dari Website
                            </Heading>
                            <Text className="text-gray-300 text-sm m-0 mt-1">
                                CV ASRI 1188 — Form Kontak
                            </Text>
                        </Section>

                        {/* Body */}
                        <Section className="bg-white px-8 py-6 border border-t-0 border-gray-200">
                            <Text className="text-gray-700 text-sm mb-4">
                                Ada pesan baru masuk dari form kontak website:
                            </Text>

                            {/* Detail Table */}
                            <Section className="mb-4">
                                <Row className="border-b border-gray-100 py-3">
                                    <Column className="w-[120px] py-3">
                                        <Text className="text-gray-500 text-xs font-bold uppercase m-0">Nama</Text>
                                    </Column>
                                    <Column className="py-3">
                                        <Text className="text-[#0f265c] text-sm font-semibold m-0">{name}</Text>
                                    </Column>
                                </Row>

                                {email && (
                                    <Row className="border-b border-gray-100 py-3">
                                        <Column className="w-[120px] py-3">
                                            <Text className="text-gray-500 text-xs font-bold uppercase m-0">Email</Text>
                                        </Column>
                                        <Column className="py-3">
                                            <Text className="text-[#0f265c] text-sm m-0">{email}</Text>
                                        </Column>
                                    </Row>
                                )}

                                <Row className="border-b border-gray-100 py-3">
                                    <Column className="w-[120px] py-3">
                                        <Text className="text-gray-500 text-xs font-bold uppercase m-0">No. Telepon</Text>
                                    </Column>
                                    <Column className="py-3">
                                        <Text className="text-[#0f265c] text-sm m-0">{phone}</Text>
                                    </Column>
                                </Row>
                            </Section>

                            {/* Message */}
                            <Text className="text-gray-500 text-xs font-bold uppercase mb-2">Pesan</Text>
                            <Section className="bg-gray-50 border-l-4 border-[#0ea5e9] p-4 rounded-r-lg">
                                <Text className="text-gray-700 text-sm m-0 whitespace-pre-wrap">
                                    {message}
                                </Text>
                            </Section>

                            <Hr className="border-gray-200 my-6" />

                            <Text className="text-gray-400 text-xs text-center m-0">
                                Pesan ini dikirim melalui form kontak website CV ASRI 1188.
                            </Text>
                        </Section>

                        {/* Footer */}
                        <Section className="bg-gray-50 px-8 py-4 rounded-b-lg border border-t-0 border-gray-200">
                            <Text className="text-gray-400 text-xs text-center m-0">
                                © {new Date().getFullYear()} CV ASRI 1188 — Andalan, Solusi, Rantai, Industri
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default ContactEmail;
