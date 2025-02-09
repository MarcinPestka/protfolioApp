export function scrollTo(id: string) {
  const elmntToView = document.getElementById(id);
  if (elmntToView) {
    elmntToView.scrollIntoView();
  }
}
