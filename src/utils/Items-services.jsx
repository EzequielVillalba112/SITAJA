import {
  FaBalanceScale,
  FaFileAlt,
  FaUsers,
  FaBook,
  FaHandshake,
} from "react-icons/fa";

// ORDEN NUEVO:
// 1) Reclamos Individuales y Colectivos
// ...
// Último: Asesoría Jurídica
export const servicios = [
  {
    icon: <FaUsers />,
    titulo: "Reclamos Individuales y Colectivos",
    desc: "Asesoramiento y acompañamiento en reclamos colectivos e individuales relacionados con derechos laborales.",
  },

  {
    icon: <FaFileAlt />,
    titulo: "Trámites Laborales",
    desc: "Gestión y asistencia en documentación, registros y consultas laborales.",
  },

  {
    icon: <FaBook />,
    titulo: "Capacitaciones",
    desc: "Formación sobre derechos, seguridad laboral y trabajo agrario.",
  },

  {
    icon: <FaHandshake />,
    titulo: "Acompañamiento a Contratistas",
    desc: "Mediación y acompañamiento para garantizar acuerdos justos.",
  },

  // Ayuda Social — por pedido NO debe aparecer
  // {
  //   icon: <FaHandsHelping />,
  //   titulo: "Ayuda Social",
  //   desc: "Apoyo comunitario, asistencia familiar y acompañamiento en situaciones urgentes.",
  // },

  {
    icon: <FaBalanceScale />,
    titulo: "Asesoría Jurídica",
    desc: "Acompañamiento y asistencia jurídica en situaciones laborales, despidos, pagos y conflictos legales.",
  },
];
