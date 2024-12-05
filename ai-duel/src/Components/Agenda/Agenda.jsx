import React from 'react';
import './Agenda.css'; 


const Agenda = () => {
 
  return (
    <section id="agendas">
    <div id="agendap">
      <h1>Agenda</h1>
      <div className="agenda-container">
        <div className="agenda-dates">
          <div className="agenda-box">Samedi</div>
        </div>
        <div className="agenda-dates">
          <div className="agenda-box">Dimanche</div>
        </div>
        <div className="agenda-dates">
          <div className="agenda-box">Lundi</div>
        </div>
        <div className="agenda-dates">
          <div className="agenda-box">Mercredi</div>
        </div>
      </div>
    </div>
  </section>
  );

};
    

export default Agenda;
