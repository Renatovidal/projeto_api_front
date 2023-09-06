package br.com.projeto.api2.controle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.projeto.api2.modelo.Cliente;
import br.com.projeto.api2.repositorio.Repositorio;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
public class Controle {
    
    @Autowired
    private Repositorio acao;

    @GetMapping("/")
    public Iterable<Cliente> listar(){
        return acao.findAll();
    }

    @PostMapping("/cadastrar")
    public Cliente cadastrar(@RequestBody Cliente c){
        return acao.save(c);
    }

    @GetMapping("/{codigo}")
    public Cliente buscar(@PathVariable long codigo){
        return acao.findByCodigo(codigo);
    }

    @PutMapping("/update")
    public Cliente upDate(@RequestBody Cliente c){
        return acao.save(c);
    }

    @DeleteMapping("/{codigo}")
    public void delete(@PathVariable long codigo){
        acao.deleteById(codigo);
    }
}
