import Image from "next/image";

export default function NotFound() {
    return (
      <main className= "contentWithFooterAndNavbar">
        <div>
            <Image src="/images/errorImage.svg" alt="404" width={300} height={300} />
            <h1>Error 404: Page not found</h1>
        </div>
      </main>
    );
  }