const TextFieldFormik = (props) => {
  const [field, meta] = useField(props.name);

  return (
    <TextField
      {...props}
      {...field}
    />
  );
};

const FormUseFormik = (props: Props) => {
  const onSubmit = (values) => {
    console.log('submit: ', values);
  };

  const formikbag = useFormik<Values>({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit,
  });

  const { handleSubmit } = formikbag;

  return (
    <FormikProvider value={formikbag}>
      <TextFieldFormik
        name='email'
        placeholder='email'
        mb={20}
      />
      <TextFieldFormik
        name='password'
        type='password'
        placeholder='password'
        mb={20}
      />
      <Button
        type='submit'
        onClick={handleSubmit}
        >
        Submit
      </Button>
    </FormikProvider>
  )
};

export default FormUseFormik;
