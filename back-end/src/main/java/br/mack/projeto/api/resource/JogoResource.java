package br.mack.projeto.api.resource;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import br.mack.projeto.api.entity.Jogo;
import br.mack.projeto.api.dto.JogoDTO;
import br.mack.projeto.api.repository.JogoRepository;


@RestController
public class JogoResource {
	
	@Autowired
	private JogoRepository repository;
	
	ModelMapper modelMapper = new ModelMapper();
	
	
	@PostMapping("/api/jogos")
	public Jogo create(@RequestBody Jogo novoJogo){
		try {
			return repository.save(novoJogo);
		}catch(Exception ex){
			throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Erro ao inserir jogo");
		}
	}
	
	@GetMapping("/api/jogos")
	public List<JogoDTO> findAll(){
		List<Jogo> jogos = (List<Jogo>) repository.findAll();
		List<JogoDTO> dto = new ArrayList<>();
		for(Jogo jogo : jogos) {
			JogoDTO jdto = modelMapper.map(jogo, JogoDTO.class);
			dto.add(jdto);
		}
		return dto;	
	}
	
	@GetMapping("/api/jogos/filter")
	public List<Jogo> findTimeAByName(@RequestParam("timea")String timea){
		return this.repository.findByTimeAContaining(timea);
	}
	
	@GetMapping("/api/jogos/{id}")
	public Jogo readById(@PathVariable long id){
		try {
			Optional <Jogo> op = repository.findById(id);
			if(op.isPresent()) {
				return op.get();
			}
		}catch(Exception ex) {
			throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Id não encontrado");
		}
		throw new ResponseStatusException(HttpStatus.NOT_FOUND);
	}
	
	@PutMapping("api/jogos/{id}")
	public Jogo update(@RequestBody Jogo jUpdate, @PathVariable long id) {
		try {
			Optional <Jogo> op = repository.findById(id);
			if(op.isPresent()) {
				Jogo j = op.get();
				String timeA = jUpdate.getTimeA();
				String timeB = jUpdate.getTimeB();
				int golsA = jUpdate.getGolsA();
				int golsB = jUpdate.getGolsB();
				
				if(timeA!=null)j.setTimeA(timeA);
				if(timeB!=null)j.setTimeB(timeB);
				if(golsA>=0)j.setGolsA(golsA);
				if(golsB>=0)j.setGolsB(golsB);
				repository.save(j);
				return j;
			}
		}catch(Exception ex) {
			throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Id não encontrado");
		}
		throw new ResponseStatusException(HttpStatus.NOT_FOUND);
	}
	
	@DeleteMapping(value = "api/jogos/{id}", produces = "application/json")
	public Jogo delete(@PathVariable long id) {
		try {
			Optional <Jogo> op = repository.findById(id);
			if(op.isPresent()) {
				repository.deleteById(id);
				return op.get();
			}
		}catch(Exception ex) {
			throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Id não encontrado");
		}
		throw new ResponseStatusException(HttpStatus.NOT_FOUND);
	}

}
