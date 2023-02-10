import * as yup from "yup";

const formSchema = yup.object().shape({
  inputName: yup
    .string()
    .min(8, "No mínimo 8 caracteres...")
    .matches(
      /\b[A-Za-zÀ-ú][A-Za-zÀ-ú]+,?\s[A-Za-zÀ-ú][A-Za-zÀ-ú]{2,19}\b/gi,
      "Letras, espaço e caracteres especiais"
    )
    .required("Nome obrigatório"),
});

export default formSchema;
