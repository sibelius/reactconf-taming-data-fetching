const TextFieldFormik = (props) => {
  const [field, meta] = useField(props.name);

  return (
    <>
      <TextField
        {...props}
        {...field}
      />
      <ErrorMessage name={props.name} />
    </>
  );
};

const FormUseFormik = (props: Props) => {
  const onSubmit = (values) => {
    console.log('submit: ', values);
  };

  const validationSchema = yup.object().shape({
    email: yup.string().email()
      .required('Email is required'),
    password: yup.string()
      .required('Password is required'),
  });

  const formikbag = useFormik<Values>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit,
  });

  const { handleSubmit } = formikbag;

  return (
    <FormikProvider value={formikbag}>
      <Flex flexDirection='column'>
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
      </Flex>
      <Button
        type='submit'
        onClick={handleSubmit}
        >
        Submit
      </Button>
    </FormikProvider>
  )
};
