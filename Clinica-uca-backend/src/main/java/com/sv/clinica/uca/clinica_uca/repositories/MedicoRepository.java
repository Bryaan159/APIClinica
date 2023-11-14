package com.sv.clinica.uca.clinica_uca.repositories;

import java.time.LocalDateTime;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.sv.clinica.uca.clinica_uca.dto.Especialidad;
import com.sv.clinica.uca.clinica_uca.model.Medico;

public interface MedicoRepository extends JpaRepository<Medico, Long>{
	
	Page<Medico> findByActivoTrue(Pageable paginacion);

	@Query("""
			select m from Medico m
			where m.activo = true 
			and m.especialidad = :especialidad and 
			m.id not in(
			select c.medico.id from Consulta c 
			where c.fecha=:fecha
			)
			order by rand() 
			limit 1
			""")
	Medico seleccionarMedicoConEspecialidadEnFecha(Especialidad especialidad, LocalDateTime fecha);
	
	@Query("""
			select m.activo from Medico m
			where m.id=:idMedico
			""")
	Boolean findActivoByid(Long idMedico);

}