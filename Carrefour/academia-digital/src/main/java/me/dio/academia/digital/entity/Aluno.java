package me.dio.academia.digital.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tb_alunos")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Aluno {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String nome;

  @Column(unique = true)
  private String cpf;

  private String bairro;

  private LocalDate dataDeNascimento;

  @OneToMany(mappedBy = "aluno", cascade = CascadeType.REMOVE , fetch = FetchType.LAZY)
  @JsonIgnore
  private List<AvaliacaoFisica> avaliacoes = new ArrayList<>();

public void setCpf(Object cpf2) {
}

public LocalDate getDataDeNascimento() {
  return dataDeNascimento;
}

public void setDataDeNascimento(LocalDate dataDeNascimento) {
  this.dataDeNascimento = dataDeNascimento;
}

public String getBairro() {
  return bairro;
}

public void setBairro(String bairro) {
  this.bairro = bairro;
}

public String getNome() {
  return nome;
}

public void setNome(String nome) {
  this.nome = nome;
}

public void setNome(Object nome2) {
}

public void setBairro(Object bairro2) {
}

public void setDataDeNascimento(Object dataDeNascimento2) {
}

public List<AvaliacaoFisica> getAvaliacoes() {
    return null;
}

}
