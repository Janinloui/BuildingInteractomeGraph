document.addEventListener('DOMContentLoaded', () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        values: [10, 20, 15, 25, 30]
    };

    createGraph(data);  // This function is defined in graph.js
});
