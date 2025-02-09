export function scrollTo(id: string) {
  var elmntToView = document.getElementById(id);
  if (elmntToView) {
    elmntToView.scrollIntoView();
  }
}
