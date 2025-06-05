// Thanks https://github.com/Janinloui this rocks :)

// change log
// grid - renamed to h_seg so not linked to body but horizontal and vert support support structure
// horizontal support structure renamed to plenum...
// horizontal support structure renamed to vert...


const gData = {
      nodes: [
        // Main objects (colored boxes)
        { id: 'Site', group: 'main' },
        { id: 'Building', group: 'main' },
        { id: 'Body', group: 'main' },
        { id: 'Floors', group: 'main' },
        { id: 'Spaces', group: 'main' },
        { id: 'Core', group: 'main' },
        { id: 'Top', group: 'main' },
        { id: 'Base', group: 'main' },
        { id: 'Skin', group: 'main' },
        { id: 'Plenum', group: 'main' },
        { id: 'Vert', group: 'main' },
        { id: 'Shape', group: 'main' },
        { id: 'H_Segs', group: 'main' },
        { id: 'Slab', group: 'main' },
        { id: 'Beam', group: 'main' },
        { id: 'Wall', group: 'main' },
        { id: 'Column', group: 'main' },
        { id: 'ArchFloorFinish', group: 'main' },
        { id: 'KPI', group: 'main' },

        // Attribute nodes for Site
        { id: 'Site.location', label: 'Location', group: 'attr' },
        { id: 'Site.boundary', label: 'Boundary', group: 'attr' },

        // Attribute nodes for Building
        { id: 'Building.location', label: 'Location', group: 'attr' },
        { id: 'Building.function', label: 'Function', group: 'attr' },
        { id: 'Building.owner', label: 'Owner', group: 'attr' },

        // Attribute nodes for Body
        { id: 'Body.volume', label: 'Volume', group: 'attr' },

         // Attribute nodes for Floors
        { id: 'Floors.ftfHeight', label: 'FTF Height', group: 'attr' },
        { id: 'Floors.boundary', label: 'Boundary', group: 'attr' },

         // Attribute nodes for Spaces
        { id: 'Spaces.location', label: 'Location', group: 'attr' },
        { id: 'Spaces.function', label: 'Function', group: 'attr' },
        { id: 'Spaces.liveLoad', label: 'Live Load', group: 'attr' },

        // Attribute nodes for Core
        { id: 'Core.location', label: 'Location', group: 'attr' },
        { id: 'Core.boundary', label: 'Boundary', group: 'attr' },
        { id: 'Core.volume', label: 'Volume', group: 'attr' },

        // Attribute nodes for Top
        { id: 'Top.roofing', label: 'Roofing', group: 'attr' },

        // Attribute nodes for Base
        { id: 'Base.entrance', label: 'Entrance', group: 'attr' },

        // Attribute nodes for Skin
        { id: 'Skin.thickness', label: 'Thickness', group: 'attr' },
        { id: 'Skin.tansparency', label: 'Transparency', group: 'attr' },

        // Attribute nodes for Horizontal Support Structure

        // Attribute nodes for Vertical Support Structure 

        // Attribute nodes for Shape
        { id: 'Shape.area', label: 'Area', group: 'attr' },
        { id: 'Shape.boundary', label: 'Boundary', group: 'attr' },

        // Attribute nodes for H_Segs
        { id: 'H_Segs.spacingX', label: 'Spacing X', group: 'attr' },
        { id: 'H_Segs.spacingY', label: 'Spacing Y', group: 'attr' },

        // Attribute nodes for Slab
        { id: 'Slab.capacity', label: 'Capacity', group: 'attr' },
        { id: 'Slab.mass', label: 'Mass', group: 'attr' },
        { id: 'Slab.cost', label: 'Cost', group: 'attr' },
        { id: 'Slab.length', label: 'Length', group: 'attr' },
        { id: 'Slab.width', label: 'Width', group: 'attr' },
        { id: 'Slab.thickness', label: 'Thickness', group: 'attr' },


        // Attribute nodes for Beam
        { id: 'Beam.capacity', label: 'Capacity', group: 'attr' },
        { id: 'Beam.mass', label: 'Mass', group: 'attr' },
        { id: 'Beam.cost', label: 'Cost', group: 'attr' },
        { id: 'Beam.length', label: 'Length', group: 'attr' },
        { id: 'Beam.width', label: 'Width', group: 'attr' },
        { id: 'Beam.height', label: 'Height', group: 'attr' },

        // Attribute nodes for Wall
        { id: 'Wall.capacity', label: 'Capacity', group: 'attr' },
        { id: 'Wall.mass', label: 'Mass', group: 'attr' },
        { id: 'Wall.cost', label: 'Cost', group: 'attr' },
        { id: 'Wall.length', label: 'Width', group: 'attr' },
        { id: 'Wall.height', label: 'Height', group: 'attr' },
        { id: 'Wall.thickness', label: 'Thickness', group: 'attr' },

        // Attribute nodes for Column
        { id: 'Column.capacity', label: 'Capacity', group: 'attr' },
        { id: 'Column.mass', label: 'Mass', group: 'attr' },
        { id: 'Column.cost', label: 'Cost', group: 'attr' },
        { id: 'Column.height', label: 'Height', group: 'attr' },
        { id: 'Column.depth', label: 'Depth', group: 'attr' },
        { id: 'Column.width', label: 'Width', group: 'attr' },

        // Attribute nodes for ArchFloorFinish
        { id: 'ArchFloorFinish.cost', label: 'Cost', group: 'attr' },
        { id: 'ArchFloorFinish.thickness', label: 'Thickness', group: 'attr' },
        { id: 'ArchFloorFinish.mass', label: 'Mass', group: 'attr' },

        // Attribute nodes for KPI
        { id: 'KPI.overallCost', label: 'Overall Cost', group: 'attr' },
        { id: 'KPI.carbonEmissions', label: 'Carbon Emissions', group: 'attr' },
        { id: 'KPI.gfa', label: 'Gross Floor Area', group: 'attr' }

      ],


      links: [
        // Main structure (composition/aggregation)
        { source: 'Site', target: 'Building'},
        { source: 'Building', target: 'Body'},
        { source: 'Building', target: 'KPI'},
        { source: 'Building', target: 'Top'},
        { source: 'Building', target: 'Base'},
        { source: 'Building', target: 'Skin'},
        { source: 'Skin', target: 'Grid'}, // <-- fixed typo: was 'skin'
        { source: 'Body', target: 'Core'},
        { source: 'Body', target: 'Floors'},
        { source: 'Floors', target: 'Spaces'},
        { source: 'Floors', target: 'Plenum'},
        { source: 'Floors', target: 'Vert'},

    
        { source: 'Spaces', target: 'Shape'},

        { source: 'Plenum', target: 'H_Segs'}, 
        { source: 'Plenum', target: 'ArchFloorFinish'},
        { source: 'Plenum', target: 'Slab'},
        { source: 'Plenum', target: 'Beam'},

        { source: 'Vert', target: 'Wall'},
        { source: 'Vert', target: 'Column'},


        // Attribute links for Site
        { source: 'Site', target: 'Site.location', type: 'attribute' },
        { source: 'Site', target: 'Site.boundary', type: 'attribute' },

        // Attribute links for Building
        { source: 'Building', target: 'Building.location', type: 'attribute' },
        { source: 'Building', target: 'Building.function', type: 'attribute' },
        { source: 'Building', target: 'Building.owner', type: 'attribute' },

        // Attribute links for Body
        { source: 'Body', target: 'Body.volume', type: 'attribute' },

        // Attribute links for Floors
        { source: 'Floors', target: 'Floors.ftfHeight', type: 'attribute' },
        { source: 'Floors', target: 'Floors.boundary', type: 'attribute' },

        // Attribute links for Spaces
        { source: 'Spaces', target: 'Spaces.location', type: 'attribute' },
        { source: 'Spaces', target: 'Spaces.function', type: 'attribute' },
        { source: 'Spaces', target: 'Spaces.liveLoad', type: 'attribute' },

        // Attribute links for Core
        { source: 'Core', target: 'Core.location', type: 'attribute' },
        { source: 'Core', target: 'Core.boundary', type: 'attribute' },
        { source: 'Core', target: 'Core.volume', type: 'attribute' },

        // Attribute links for Top
        { source: 'Top', target: 'Top.roofing', type: 'attribute' },

        // Attribute links for Base
        { source: 'Base', target: 'Base.entrance', type: 'attribute' },

        // Attribute links for Skin
        { source: 'Skin', target: 'Skin.thickness', type: 'attribute' },
        { source: 'Skin', target: 'Skin.tansparency', type: 'attribute' },

        // Attribute links for Horizontal Support Structure
       
        // Attribute links for Vertical Support Structure

        // Attribute links for Shape
        { source: 'Shape', target: 'Shape.area', type: 'attribute' },
        { source: 'Shape', target: 'Shape.boundary', type: 'attribute' },

        // Attribute links for H_Segs
        { source: 'H_Segs', target: 'H_Segs.spacingX', type: 'attribute' },
        { source: 'H_Segs', target: 'H_Segs.spacingY', type: 'attribute' },

        // Attribute links for Slab
        { source: 'Slab', target: 'Slab.capacity', type: 'attribute' },
        { source: 'Slab', target: 'Slab.mass', type: 'attribute' },
        { source: 'Slab', target: 'Slab.cost', type: 'attribute' },
        { source: 'Slab', target: 'Slab.length', type: 'attribute' },
        { source: 'Slab', target: 'Slab.width', type: 'attribute' },
        { source: 'Slab', target: 'Slab.thickness', type: 'attribute' },

        // Attribute links for Beam
        { source: 'Beam', target: 'Beam.capacity', type: 'attribute' },
        { source: 'Beam', target: 'Beam.mass', type: 'attribute' },
        { source: 'Beam', target: 'Beam.cost', type: 'attribute' },
        { source: 'Beam', target: 'Beam.length', type: 'attribute' },
        { source: 'Beam', target: 'Beam.width', type: 'attribute' },
        { source: 'Beam', target: 'Beam.height', type: 'attribute' },

        // Attribute links for Wall
        { source: 'Wall', target: 'Wall.capacity', type: 'attribute' },
        { source: 'Wall', target: 'Wall.mass', type: 'attribute' },
        { source: 'Wall', target: 'Wall.cost', type: 'attribute' },
        { source: 'Wall', target: 'Wall.length', type: 'attribute' },
        { source: 'Wall', target: 'Wall.height', type: 'attribute' },
        { source: 'Wall', target: 'Wall.thickness', type: 'attribute' },

        // Attribute links for Column
        { source: 'Column', target: 'Column.capacity', type: 'attribute' },
        { source: 'Column', target: 'Column.mass', type: 'attribute' },
        { source: 'Column', target: 'Column.cost', type: 'attribute' },
        { source: 'Column', target: 'Column.height', type: 'attribute' },
        { source: 'Column', target: 'Column.depth', type: 'attribute' },
        { source: 'Column', target: 'Column.width', type: 'attribute' },

        // Attribute links for ArchFloorFinish
        { source: 'ArchFloorFinish', target: 'ArchFloorFinish.cost', type: 'attribute' },
        { source: 'ArchFloorFinish', target: 'ArchFloorFinish.thickness', type: 'attribute' },
        { source: 'ArchFloorFinish', target: 'ArchFloorFinish.mass', type: 'attribute' },

        // Attribute links for KPI
        { source: 'KPI', target: 'KPI.overallCost', type: 'attribute' },
        { source: 'KPI', target: 'KPI.carbonEmissions', type: 'attribute' },
        { source: 'KPI', target: 'KPI.gfa', type: 'attribute' }
      
      ]
    };
