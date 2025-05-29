


    const gData = {
      nodes: [
        // Main objects (colored boxes)
        { id: 'Site', group: 'main' },
        { id: 'Building', group: 'main' },
        { id: 'Body', group: 'main' },
        { id: 'Core', group: 'main' },
        { id: 'Skin', group: 'main' },
        { id: 'Top', group: 'main' },
        { id: 'Base', group: 'main' },

        // Attribute nodes for Site
        { id: 'Site.location', label: 'location: int', group: 'attr' },
        { id: 'Site.method', label: 'method(type): type', group: 'attr' },

        // Attribute nodes for Building
        { id: 'Building.location', label: 'location: int', group: 'attr' },
        { id: 'Building.function', label: 'function: string', group: 'attr' },
        { id: 'Building.method', label: 'method(type): type', group: 'attr' },

        // Attribute nodes for Body
        { id: 'Body.volume', label: 'volume: int', group: 'attr' },
        { id: 'Body.method', label: 'method(type): type', group: 'attr' },

        // Attribute nodes for Core
        { id: 'Core.location', label: 'location: int', group: 'attr' },
        { id: 'Core.method', label: 'method(type): type', group: 'attr' },

        // Attribute nodes for Skin
        { id: 'Skin.thickness', label: 'thickness: int', group: 'attr' },
        { id: 'Skin.method', label: 'method(type): type', group: 'attr' },

        // Attribute nodes for Top
        { id: 'Top.Roofing', label: 'Roofing: type', group: 'attr' },
        { id: 'Top.method', label: 'method(type): type', group: 'attr' },

        // Attribute nodes for Base
        { id: 'Base.Entrance', label: 'Entrance: type', group: 'attr' },
        { id: 'Base.method', label: 'method(type): type', group: 'attr' },

        // Add missing nodes for dependency/attribute targets if not already present
        { id: 'Shape', group: 'main' },
        { id: 'Spaces', group: 'main' }
      ],
      links: [
        // Main structure (composition/aggregation)
        { source: 'Site', target: 'Building', type: 'aggregation' },
        { source: 'Building', target: 'Body', type: 'composition' },
        { source: 'Body', target: 'Core', type: 'aggregation' },
        { source: 'Body', target: 'Skin', type: 'aggregation' },
        { source: 'Body', target: 'Top', type: 'aggregation' },
        { source: 'Body', target: 'Base', type: 'aggregation' },

        // Example: dependency between Core and Shape, and Core and Spaces
        { source: 'Core', target: 'Shape', type: 'dependency' },
        { source: 'Core', target: 'Spaces', type: 'dependency' },

        // Attribute links for Site
        { source: 'Site', target: 'Site.location', type: 'attribute' },
        { source: 'Site', target: 'Site.method', type: 'attribute' },

        // Attribute links for Building
        { source: 'Building', target: 'Building.location', type: 'attribute' },
        { source: 'Building', target: 'Building.function', type: 'attribute' },
        { source: 'Building', target: 'Building.method', type: 'attribute' },

        // Attribute links for Body
        { source: 'Body', target: 'Body.volume', type: 'attribute' },
        { source: 'Body', target: 'Body.method', type: 'attribute' },

        // Attribute links for Core
        { source: 'Core', target: 'Core.location', type: 'attribute' },
        { source: 'Core', target: 'Core.method', type: 'attribute' },

        // Attribute links for Skin
        { source: 'Skin', target: 'Skin.thickness', type: 'attribute' },
        { source: 'Skin', target: 'Skin.method', type: 'attribute' },

        // Attribute links for Top
        { source: 'Top', target: 'Top.Roofing', type: 'attribute' },
        { source: 'Top', target: 'Top.method', type: 'attribute' },

        // Attribute links for Base
        { source: 'Base', target: 'Base.Entrance', type: 'attribute' },
        { source: 'Base', target: 'Base.method', type: 'attribute' }
      ]
    };
