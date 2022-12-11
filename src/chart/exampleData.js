
const data = {
    nodes: [{
        id: "0",
        isClusterNode: true,
        name: "jennifer",
        size: 2
    },
    {
        id: "1",
        isClusterNode: true,
        name: "neo4j",
        color: "red",
        size: 2
    },
    {
        id: "2",
        isClusterNode: true,
        name: "john",
        size: 2
    },
    {
        id: "3",
        isClusterNode: true,
        name: "java",
        color: "green",
        size: 2
    },
    {
        id: "4",
        isClusterNode: true,
        name: "Mark",
        size: 2
    },
    {
        id: "5",
        isClusterNode: true,
        name: "Graphs",
        color: "green",
        size: 2
    },
    {
        id: "6",
        isClusterNode: true,
        name: "Melissa",
        size: 2
    },
    {
        id: "7",
        isClusterNode: true,
        name: "Ann",
        size: 2
    },
    {
        id: "8",
        isClusterNode: true,
        name: "Sally",
        size: 2
    },
    {
        id: "9",
        isClusterNode: true,
        name: "xyz",
        color: "red",
        size: 2
    },
    {
        id: "10",
        isClusterNode: true,
        name: "Application",
        color: "green",
        size: 2
    },
    {
        id: "11",
        isClusterNode: true,
        name: "Joe",
        size: 2
    },
    {
        id: "12",
        isClusterNode: true,
        name: "query lang",
        color: "green",
        size: 2
    },
    {
        id: "13",
        isClusterNode: true,
        name: "Company",
        color: "red",
        size: 2
    },
    {
        id: "14",
        isClusterNode: true,
        name: "data Etl",
        color: "green",
        size: 2
    },
    {
        id: "15",
        isClusterNode: true,
        name: "ABC",
        color: "red",
        size: 2
    },
    {
        id: "16",
        isClusterNode: true,
        name: "Dan",
        size: 2
    },
    {
        id: "17",
        isClusterNode: true,
        name: "Intigration",
        color: "green",
        size: 2
    },
    {
        id: "18",
        isClusterNode: true,
        name: "Diana",
        size: 2
    },
    {
        id: "19",
        isClusterNode: true,
        name: "Company",
        color: "red",
        size: 2
    },



    ],
    links: [
        {
            source: "0",
            target: "1",
        },
        {
            source: "0",
            target: "2",
        },
        {
            source: "0",
            target: "3",
        },
        {
            source: "0",
            target: "4",
        },
        {
            source: "0",
            target: "5",
        },
        {
            source: "0",
            target: "6",
        },
        {
            source: "0",
            target: "7",
        },
        {
            source: "0",
            target: "8",
        },
        {
            source: "2",
            target: "3",
        },
        {
            source: "2",
            target: "9",
        },
        {
            source: "2",
            target: "10",
        },
        {
            source: "2",
            target: "8",
        },
        {
            source: "4",
            target: "5",
        },
        {
            source: "6",
            target: "5",
        },
        {
            source: "6",
            target: "12",
        },
        {
            source: "6",
            target: "13",
        },
        {
            source: "6",
            target: "14",
        },
        {
            source: "7",
            target: "15",
        },
        {
            source: "7",
            target: "16",
        },
        {
            source: "7",
            target: "10",
        },
        {
            source: "8",
            target: "9",
        },
        {
            source: "8",
            target: "17",
        },

        {
            source: "16",
            target: "17",
        },
        {
            source: "16",
            target: "14",
        },
        {
            source: "16",
            target: "15",
        },
        {
            source: "18",
            target: "5",
        },
        {
            source: "18",
            target: "12",
        },
        {
            source: "18",
            target: "19",
        },
        {
            source: "11",
            target: "4",
        },
        {
            source: "11",
            target: "12",
        },
        {
            source: "11",
            target: "18",
        },


    ]
};

data.nodes.forEach((node) => {
    node.val = (node.size * 10) | (node.degrees / 10);
    if (node.isClusterNode) {
        node.clusterId = null;
    } else {
        const link = data.links.find((link) => link.target === node.id);
        node.clusterId = link && link.source;
    }
});


export { data };
