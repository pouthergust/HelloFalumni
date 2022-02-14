import React, { FormEvent } from 'react';

type Props = {
    title: string
    children: any
    handleSubmit: (event: FormEvent) => void
}

function FormBasicBoilerplate({ title, handleSubmit, children }: Props) {

  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="c-fieldset --std">
        <legend className="c-fieldset__legend">{title}</legend>
        {children}
      </fieldset>
    </form>
  );
}

export default FormBasicBoilerplate;