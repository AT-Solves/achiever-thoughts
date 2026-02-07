import products from "../data/products.json";
import "../styles/products.css";

export default function Products() {
    return (
        <main>
            <section className="hero">
                <div className="hero-inner container">
                    <h1 className="hero-title">
                        Rapid Prototyping Applications
                    </h1>
                    <div className="hero-divider"></div>
                    <p className="hero-text">
                        A collection of AI-driven prototypes built through
                        exploration, learning, and applied product thinking.
                    </p>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">
                        Applications Portfolio
                    </h2>
                    <div className="section-divider"></div>

                    <div className="grid-3">
                        {products.map((product) => (
                            <article key={product.id} className="card product-card">
                                <h3>{product.name}</h3>

                                <p className="product-meta">
                                    Category: {product.category}
                                </p>

                                <p>{product.description}</p>

                                <p className="product-status">
                                    Status: {product.status}
                                </p>

                                <div className="product-actions">
                                    <a
                                        href={product.url}
                                        className="button-primary"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Launch Application
                                    </a>
                                    <a href={product.github} className="button-secondary" target="_blank">
                                        View GitHub
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
