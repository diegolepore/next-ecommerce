export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>Dynamic Page: {params.slug}</h1>
      {/* ...other content... */}
    </div>
  );
}
