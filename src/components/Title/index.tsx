import React from 'react';

type Props = {
    title: string
    align?: string
}

function Title({ title, align = 'left' }: Props) {
  return <p className={`c-title ${align}`}>{title}</p>;
}

export default Title;