package br.com.projeto.api2.repositorio;


import org.springframework.data.repository.CrudRepository;


import br.com.projeto.api2.modelo.Cliente;


public interface Repositorio extends CrudRepository<Cliente, Long>{
    
    Cliente findByCodigo(long codigo);
    
}
