package controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import exception.ResourceNotFoundException;
import repository.EmpregadoRepository;
import model.Empregado;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("api/v1")
public class EmpregadoController {

	@Autowired
	private EmpregadoRepository empregadoRepository;

	/* Buscar todos os empregados */
	@GetMapping("/empregados")
	public List<Empregado> getAllEmpregados() {
		return empregadoRepository.findAll();
	}

	/* Buscar um empregado */
	@GetMapping("/empregados/{id}")
	public ResponseEntity<Empregado> getEmpregadoId(@PathVariable(value = "id") Long empregadoId)
			throws ResourceNotFoundException {
		Empregado empregado = empregadoRepository.findById(empregadoId).orElseThrow(
				() -> new ResourceNotFoundException("Empregado não encontrado por esse Id ::" + empregadoId));
		return ResponseEntity.ok().body(empregado);
	}

	/* Criar um empregado */
	@PostMapping("/empregados")
	public Empregado criarEmpregado(@Valid @RequestBody Empregado empregado) {
		return empregadoRepository.save(empregado);
	}

	/* Atualizar um empregado */
	@PutMapping("/empregados/{id}")
	public ResponseEntity<Empregado> atualizarEmpregado(@PathVariable(value = "id") Long empregadoId,
			@Valid @RequestBody Empregado empregadoDetails) throws ResourceNotFoundException {
		Empregado empregado = empregadoRepository.findById(empregadoId).orElseThrow(
				() -> new ResourceNotFoundException("Empregado não encontrado por esse Id ::" + empregadoId));

		empregado.setEmailId(empregadoDetails.getEmailId());
		empregado.setUltimoNome(empregadoDetails.getUltimoNome());
		empregado.setPrimeiroNome(empregadoDetails.getPrimeiroNome());
		final Empregado atualizadoEmpregado = empregadoRepository.save(empregado);
		return ResponseEntity.ok(atualizadoEmpregado);
	}

	/* Deletar um empregado */
	@DeleteMapping("/empregados/{id}")
	public Map<String, Boolean> deleteEmpregado(@PathVariable(value = "id") Long empregadoId)
		throws ResourceNotFoundException{
		Empregado empregado = empregadoRepository.findById(empregadoId)
				.orElseThrow(() -> new ResourceNotFoundException("Empregado não encontrado por esse Id ::" + empregadoId));
		
		empregadoRepository.delete(empregado);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deletado", Boolean.TRUE);
		return response;
	}
}
