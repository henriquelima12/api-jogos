package br.mack.projeto.api.repository;
import java.util.List;
import org.springframework.data.repository.CrudRepository;
import br.mack.projeto.api.entity.Jogo;


public interface JogoRepository extends CrudRepository<Jogo, Long>{
	List<Jogo> findByTimeAContaining(String timea);	

}



