const dom = document.querySelector('[name=csrf-token]');

export default function () {
  // @ts-ignore
  const token: string = dom.content;
  return token;
}
