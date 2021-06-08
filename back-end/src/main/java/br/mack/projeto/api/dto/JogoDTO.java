package br.mack.projeto.api.dto;

public class JogoDTO {
	long id;
	String timeA;
	String timeB;
	
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

}
