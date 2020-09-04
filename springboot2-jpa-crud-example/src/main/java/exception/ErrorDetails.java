package exception;

import java.util.Date;

public class ErrorDetails {
	private Date marcaTemporal;
	private String mensagem;
	private String detalhes;
	
	public ErrorDetails(Date marcaTemporal, String mensagem, String detalhes) {
		super();
		this.marcaTemporal = marcaTemporal;
		this.mensagem = mensagem;
		this.detalhes = detalhes;
	}
	
	public Date getMarcaTemporal() {
		return marcaTemporal;
	}

	public String getMensagem() {
		return mensagem;
	}
	
	public String getDetalhes() {
		return detalhes;
	}
	
	
}
