package com.sv.clinica.uca.clinica_uca.repositories;

import java.time.LocalDateTime;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sv.clinica.uca.clinica_uca.model.Consulta;

@Repository
public interface ConsultaRepository extends JpaRepository<Consulta, Long>{
	
	Boolean existsByPacienteIdAndFechaBetween(Long idPaciente, LocalDateTime primerHorario, LocalDateTime ultimoHorario);
	
	Boolean existsByMedicoIdAndFecha(Long idMedico, LocalDateTime fecha);

}
