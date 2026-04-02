import React, { useState } from 'react'; // Importamos useState
import { services } from './data/services';
import './App.css';

function App() {
  // Estado para la categoría seleccionada
  const [filter, setFilter] = useState('Todos');

  // Obtenemos las categorías únicas de tu lista de servicios
  const categories = ['Todos', ...new Set(services.map(s => s.category))];

  // Filtramos la lista según el estado
  const filteredServices = filter === 'Todos' 
    ? services 
    : services.filter(s => s.category === filter);

  return (
    <div className="main-wrapper">
      <nav className="navbar">
        <div className="logo">BID Servicios Integrales</div>
      </nav>

      <header className="hero">
        <h1>Excelencia y Confianza en cada Servicio</h1>
        <p>
          Especialistas en trabajos de alto riesgo y mantenimiento industrial
        </p>
        <a href="#contacto" className="btn-cotizar">Solicitar Presupuesto</a>
      </header>

      <section className="services-container" id='servicios'>
        <h2 style={{ textAlign: "center", color: "#0D3B66" }}>
          Nuestros Servicios Especializados
        </h2>

        {/* BOTONES DE FILTRO */}
        <div className="filter-container">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID FILTRADO */}
        <div className="services-grid">
          {filteredServices.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <span className="category-tag">{service.category}</span>
            </div>
          ))}
        </div>
      </section>
      <a
        href="https://wa.me/56992757448"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span style={{ fontSize: "30px" }}>💬</span>
        <small>Cotizar por WhatsApp</small>
      </a>

      <section className="quote-section" id="contacto">
        <div className="quote-container">
          <div className="quote-info">
            <h2>Solicitar Presupuesto</h2>
            <p>
              Cuéntenos sobre su proyecto y nos pondremos en contacto en menos
              de 24 horas.
            </p>
            <div className="quote-details">
              <span>📍 Santiago, Chile</span>
              <span>📞 +56 9 9275 7448</span>
            </div>
          </div>

          <form className="quote-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>Nombre Completo</label>
              <input type="text" placeholder="Ej: Juan Pérez" required />
            </div>

            <div className="form-group">
              <label>Correo Electrónico</label>
              <input type="email" placeholder="juan@empresa.cl" required />
            </div>

            <div className="form-group">
              <label>Servicio Requerido</label>
              <select required>
                <option value="">Seleccione un servicio...</option>
                {services.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Mensaje / Detalles del trabajo</label>
              <textarea
                rows="4"
                placeholder="Describa brevemente lo que necesita (m2, altura, ubicación, etc.)"
              ></textarea>
            </div>

            <button type="submit" className="btn-send">
              Enviar Solicitud
            </button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          {/* Columna 1: Logo y Eslogan */}
          <div className="footer-section about">
            <h2 className="footer-logo">
              BID <span>Servicios</span>
            </h2>
            <p>
              Expertos en soluciones integrales para mantenimiento industrial y
              trabajos de alto riesgo. Seguridad y calidad en cada proyecto.
            </p>
          </div>

          {/* Columna 2: Enlaces Rápidos (puedes usar scroll después) */}
          <div className="footer-section links">
            <h3>Navegación</h3>
            <ul>
              <li>
                <a href="#">Inicio</a>
              </li>
              <li>
                <a href="#servicios">Servicios</a>
              </li>
              <li>
                <a href="#">Proyectos</a>
              </li>
              <li>
                <a href="#contacto">Cotizar</a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto Directo */}
          <div className="footer-section contact-info">
            <h3>Contacto</h3>
            <p>📍 Santiago, Chile</p>
            <p>📞 +56 9 9275 7448</p>
            <p>✉️ contacto@bidservicios.cl</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; 2026 BID Servicios Integrales | Desarrollado por{" "}
            <strong>Johan Sanz</strong>
          </p>
        </div>
      </footer>
    </div>
  );

  
}

export default App;