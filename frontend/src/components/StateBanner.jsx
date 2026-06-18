function StateBanner({
  title,
  subtitle
}) {
  return (
    <section className="state-banner">

      <div className="state-banner-content">

        <h1>{title}</h1>

        <p>{subtitle}</p>

      </div>

    </section>
  );
}

export default StateBanner;