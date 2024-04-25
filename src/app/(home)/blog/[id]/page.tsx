

export default function BlogPost({ params }: { params: { id: string } }) {
    return (
      <>
        <h1>Title new</h1>
        <p>hellloo</p>
        <section>
          <h2>{params.id}</h2>
          </section>
      </>
    );
  }