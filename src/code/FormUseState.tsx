const FormUseState = () => {
  const mapPropsToValues = () => {
    return {
      email: '',
      password: '',
    };
  };

  const [formState, setFormState] =
    useState(mapPropsToValues());

  const handleSubmit = () => {
    console.log('submit: ', values);
  };

  const setFieldValue = (
    fieldName: string,
    value
  ) => {
    setFormState({
      ...formState,
      [fieldName]: value,
    });
  };

  return (
    <>
      <TextField
        placeholder='email'
        mb={20}
        value={formState.email}
        onChange={(e) =>
          setFieldValue(
            'email',
            e.target.value
          )}
      />
      <TextField
        type='password'
        placeholder='password'
        mb={20}
        value={formState.password}
        onChange={(e) =>
          setFieldValue(
            'password',
            e.target.value
          )}
      />
      <Button
        type='submit'
        onClick={handleSubmit}
        >
        Submit
      </Button>
    </Flex>
  )
};
