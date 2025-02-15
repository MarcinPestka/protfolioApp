export function scrollTo(id: string) {
  const elmntToView = document.getElementById(id);
  console.log(elmntToView?.outerHTML);
  if (elmntToView) {
    elmntToView.scrollIntoView();
  }
}
