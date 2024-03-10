export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <main>
            <nav> Naveagcion subcategorias </nav>
            {children}
        </main>
    );
}