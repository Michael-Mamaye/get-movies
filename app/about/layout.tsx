export const metadata = {
    title: "Get Movies",
    description: "Get the Latest movies and see if they are released or not",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body >{children}</body>
        </html>
    );
}
