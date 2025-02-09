function scrollContainer(scrollOffset) {
  const container = document.getElementById("portfolioScroll");
  container.scrollBy({
    left: scrollOffset,
    behavior: "smooth",
  });
}
