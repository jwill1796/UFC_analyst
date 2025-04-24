document.addEventListener("DOMContentLoaded", function () {
  const stats = [
    { label: "Striking", left: 70, right: 30 },
    { label: "Grappling", left: 50, right: 60 },
    { label: "Takedown Defense", left: 40, right: 80 },
  ];

  const chart = document.getElementById("divergent-chart");

  stats.forEach(stat => {
    const row = document.createElement("div");
    row.classList.add("divergent-row");

    const leftBar = document.createElement("div");
    leftBar.classList.add("bar", "left");
    leftBar.style.width = stat.left + "%";
    leftBar.textContent = stat.left;

    const label = document.createElement("div");
    label.classList.add("stat-label");
    label.textContent = stat.label;

    const rightBar = document.createElement("div");
    rightBar.classList.add("bar", "right");
    rightBar.style.width = stat.right + "%";
    rightBar.textContent = stat.right;

    row.appendChild(leftBar);
    row.appendChild(label);
    row.appendChild(rightBar);

    chart.appendChild(row);
  });
});

