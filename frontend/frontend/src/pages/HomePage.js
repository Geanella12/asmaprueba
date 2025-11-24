import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Centro Médico del ASMA</h1>
        <p>Sistema de Gestión y Evaluación Médica</p>
        <p>Acceda al panel correspondiente según su rol</p>
      </div>

      <div className="access-panels">

        <div className="panel-card doctor-panel">
          <h3>Panel de Doctor</h3>
          <p>Gestión de pacientes y diagnósticos</p>
          <ul>
            <li>Visualizar pacientes</li>
            <li>Editar información médica</li>
          </ul>
          <Link to="/doctor/login" className="btn-panel">
            Acceder como Doctor
          </Link>
        </div>

        <div className="panel-card user-panel">
          <h3>Panel de Pacientes</h3>
          <p>Acceso para pacientes</p>
          <ul>
            <li>Completar formulario médico</li>
            <li>Ver reporte personal</li>
          </ul>
          <Link to="/user/login" className="btn-panel">
            Acceder como Usuario
          </Link>
        </div>
      </div>

      <div className="info-section">
        <h2>Acerca del Sistema</h2>
        <p>
          El Centro Médico del ASMA es un sistema integral para la evaluación y gestión 
          de pacientes con asma. Nuestro sistema permite a los profesionales médicos 
          realizar un seguimiento completo de los pacientes, mientras que los usuarios 
          pueden completar sus formularios médicos y acceder a sus reportes de evaluación.
        </p>
        <div className="features">
          <div className="feature">
            <h4>🔒 Seguro</h4>
            <p>Datos protegidos con autenticación segura</p>
          </div>
          <div className="feature">
            <h4>👥 Multi-rol</h4>
            <p>Diferentes paneles según el tipo de usuario</p>
          </div>
          <div className="feature">
            <h4>📱 Responsive</h4>
            <p>Funciona en todos los dispositivos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
