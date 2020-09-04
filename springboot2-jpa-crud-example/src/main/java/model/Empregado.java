package model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="empregados")
public class Empregado {
	
	private long id;
	private String primeiroNome;
	private String ultimoNome;
	private String emailId;
	
	public Empregado() {
		
	}
	
	public Empregado(String primeiroNome, String ultimoNome, String emailId) {
		this.primeiroNome = primeiroNome;
		this.ultimoNome = ultimoNome;
		this.emailId = emailId;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)	
	public long getId() {
		return id;
	}
	
	public void setId(long id) {
		this.id = id;
	}
	
	@Column(name="primeiro_nome", nullable = false)
	public String getPrimeiroNome() {
		return primeiroNome;
	}
	
	public void setPrimeiroNome(String primeiroNome) {
		this.primeiroNome = primeiroNome;
	}

	@Column(name="ultimo_nome", nullable = false)
	public String getUltimoNome() {
		return ultimoNome;
	}

	public void setUltimoNome(String ultimoNome) {
		this.ultimoNome = ultimoNome;
	}
	
	@Column(name="endereço_email", nullable = false)
	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	
	public String toString() {
		return "Empregado [id= "+id+", primeiro nome= "+primeiroNome+", ultimo nome= "+ultimoNome+", emailId= "+emailId+"]"; 
	}

}
