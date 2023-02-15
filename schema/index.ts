import * as yup from "yup";

export const formSchemaHome = yup.object().shape({
  inputName: yup
    .string()
    .required("Nome obrigatório")
    .min(8, "No mínimo 8 caracteres...")
    .matches(
      /\b[A-Za-zÀ-ú][A-Za-zÀ-ú]+,?\s[A-Za-zÀ-ú][A-Za-zÀ-ú]{2,19}\b/gi,
      "Letras, espaço e caracteres especiais"
    ),
});

export const formSchemaCreateTask = yup.object().shape({
  title: yup.string().required("Descrição obrigatória"),
  tag: yup.string().required("Categoria obrigatória"),
});
