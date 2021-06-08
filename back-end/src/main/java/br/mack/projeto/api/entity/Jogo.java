package br.mack.projeto.api.entity;
import javax.persistence.*;
import javax.validation.constraints.*;

@Entity
public class Jogo {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	long id;
	@NotNull(message="Campo obrigatório") 
	@Column(nullable = false)
	String timeA;
	@NotNull(message="Campo obrigatório") 
	@Column(nullable = false)
	String timeB;
	@Min(0)
	@Column(nullable = false)
	int golsA;
	@Min(0)
	@Column(nullable = false)
	int golsB;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getTimeA() {
		return timeA;
	}
	public void setTimeA(String timeA) {
		this.timeA = timeA;
	}
	public String getTimeB() {
		return timeB;
	}
	public void setTimeB(String timeB) {
		this.timeB = timeB;
	}
	public int getGolsA() {
		return golsA;
	}
	public void setGolsA(int golsA) {
		this.golsA = golsA;
	}
	public int getGolsB() {
		return golsB;
	}
	public void setGolsB(int golsB) {
		this.golsB = golsB;
	}
}
