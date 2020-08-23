import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriasRepository.getAll()
      .then((categoriasFromServer) => setCategorias(categoriasFromServer));
  }, []);

  function onSubmitHandler(event) {
    event.preventDefault();
    const categoriaEncontrada = categorias.find((categoria) => categoria.titulo === values.categoria);

    videosRepository.insert({
      titulo: values,
      url: values.url,
      categoriaId: categoriaEncontrada.id,
    })
      .then(() => {
        history.push('/');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <PageDefault>
      <h1>
        Cadastro de Vídeo
      </h1>
      <form onSubmit={onSubmitHandler}>

        <FormField
          id="titulo"
          label="Título"
          value={values.titulo}
          onChangeHandler={handleChange}
        />

        <FormField
          id="url"
          label="URL"
          value={values.url}
          onChangeHandler={handleChange}
        />

        <FormField
          id="categoria"
          label="Categoria"
          value={values.categoria}
          suggestions={categoryTitles}
          onChangeHandler={handleChange}
        />

        <Button type="submit">
          Cadastrar
        </Button>

      </form>

      <Link to="/cadastro/categoria">
        <div>
          <br/>
          Cadastrar Categoria
        </div>
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
