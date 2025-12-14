// INVENTORY MANAGEMENT DATA (50 items)
const inventoryData = [
    // Equipment
    { sku: 'SKU-001', name: 'Vibranium Shield', category: 'Equipment', quantity: 47, minStock: 20, unitPrice: 2499999, lastUpdate: '2025-01-10', updatedBy: 'Bruce Wayne', note: 'Wakandan import' },
    { sku: 'SKU-002', name: 'Arc Reactor MK-50', category: 'Equipment', quantity: 23, minStock: 10, unitPrice: 8999999, lastUpdate: '2025-01-09', updatedBy: 'Tony Stark', note: 'Latest model' },
    { sku: 'SKU-003', name: 'Web Shooter Pro', category: 'Equipment', quantity: 156, minStock: 50, unitPrice: 149999, lastUpdate: '2025-01-11', updatedBy: 'Peter Parker', note: 'High demand' },
    { sku: 'SKU-004', name: 'Quantum Processor', category: 'Equipment', quantity: 12, minStock: 5, unitPrice: 15499999, lastUpdate: '2025-01-08', updatedBy: 'Bruce Banner', note: 'Limited supply' },
    { sku: 'SKU-005', name: 'Nano-Suit Material', category: 'Equipment', quantity: 34, minStock: 15, unitPrice: 5299999, lastUpdate: '2025-01-07', updatedBy: 'Tony Stark', note: 'Roll form' },
    
    // Suits & Armor
    { sku: 'SKU-006', name: 'Iron Man Suit MK-85', category: 'Suit', quantity: 8, minStock: 3, unitPrice: 45000000, lastUpdate: '2025-01-05', updatedBy: 'Tony Stark', note: 'Custom orders only' },
    { sku: 'SKU-007', name: 'Spider-Man Classic Suit', category: 'Suit', quantity: 89, minStock: 30, unitPrice: 89999, lastUpdate: '2025-01-11', updatedBy: 'Peter Parker', note: 'Best seller' },
    { sku: 'SKU-008', name: 'Black Panther Suit', category: 'Suit', quantity: 15, minStock: 8, unitPrice: 12500000, lastUpdate: '2024-12-28', updatedBy: 'Selina Kyle', note: 'Vibranium weave' },
    { sku: 'SKU-009', name: 'Captain America Uniform', category: 'Suit', quantity: 67, minStock: 25, unitPrice: 125000, lastUpdate: '2025-01-06', updatedBy: 'Steve Roger', note: 'Classic design' },
    { sku: 'SKU-010', name: 'Thor Battle Armor', category: 'Suit', quantity: 11, minStock: 5, unitPrice: 8750000, lastUpdate: '2024-12-15', updatedBy: 'Dick Grayson', note: 'Asgardian tech' },
    
    // Weapons
    { sku: 'SKU-011', name: 'Repulsor Ray Gauntlet', category: 'Weapon', quantity: 4, minStock: 15, unitPrice: 899999, lastUpdate: '2025-01-09', updatedBy: 'Tony Stark', note: 'Reorder needed' },
    { sku: 'SKU-012', name: 'Widow Bite Bracelet', category: 'Weapon', quantity: 45, minStock: 20, unitPrice: 75000, lastUpdate: '2025-01-08', updatedBy: 'Natalia Romanova', note: 'Standard issue' },
    { sku: 'SKU-013', name: 'Hawkeye Compound Bow', category: 'Weapon', quantity: 28, minStock: 15, unitPrice: 125000, lastUpdate: '2025-01-07', updatedBy: 'Dick Grayson', note: 'Custom strings' },
    { sku: 'SKU-014', name: 'Winter Soldier Arm', category: 'Weapon', quantity: 6, minStock: 3, unitPrice: 5500000, lastUpdate: '2024-12-20', updatedBy: 'Bruce Banner', note: 'Prosthetic' },
    { sku: 'SKU-015', name: 'Stormbreaker Replica', category: 'Weapon', quantity: 5, minStock: 2, unitPrice: 12000000, lastUpdate: '2025-01-03', updatedBy: 'Charles Xavier', note: 'Training only' },
    
    // Accessories
    { sku: 'SKU-016', name: 'Utility Belt (Batman Style)', category: 'Accessory', quantity: 134, minStock: 50, unitPrice: 25000, lastUpdate: '2025-01-10', updatedBy: 'Bruce Wayne', note: 'Multi-compartment' },
    { sku: 'SKU-017', name: 'Captain America Shield Harness', category: 'Accessory', quantity: 56, minStock: 25, unitPrice: 15000, lastUpdate: '2025-01-09', updatedBy: 'Steve Roger', note: 'Magnetic mount' },
    { sku: 'SKU-018', name: 'Iron Man Helmet HUD', category: 'Accessory', quantity: 19, minStock: 10, unitPrice: 1250000, lastUpdate: '2025-01-08', updatedBy: 'Tony Stark', note: 'AR display' },
    { sku: 'SKU-019', name: 'Mjolnir Replica', category: 'Weapon', quantity: 3, minStock: 10, unitPrice: 9999999, lastUpdate: '2025-01-06', updatedBy: 'Thor Odinson', note: 'CRITICAL LOW' },
    { sku: 'SKU-020', name: 'Ant-Man Helmet', category: 'Accessory', quantity: 22, minStock: 10, unitPrice: 875000, lastUpdate: '2025-01-05', updatedBy: 'Scott Lang', note: 'Size regulators' },
    
    // Tech Devices
    { sku: 'SKU-021', name: 'Stark Phone', category: 'Tech', quantity: 245, minStock: 100, unitPrice: 15000, lastUpdate: '2025-01-11', updatedBy: 'Tony Stark', note: 'Encrypted' },
    { sku: 'SKU-022', name: 'Wakandan Kimoyo Beads', category: 'Tech', quantity: 78, minStock: 30, unitPrice: 125000, lastUpdate: '2025-01-10', updatedBy: 'Selina Kyle', note: 'Imported' },
    { sku: 'SKU-023', name: 'S.H.I.E.L.D. Communicator', category: 'Tech', quantity: 167, minStock: 75, unitPrice: 8500, lastUpdate: '2025-01-09', updatedBy: 'Natalia Romanova', note: 'Standard issue' },
    { sku: 'SKU-024', name: 'Spider Drone', category: 'Tech', quantity: 91, minStock: 40, unitPrice: 95000, lastUpdate: '2025-01-08', updatedBy: 'Peter Parker', note: 'AI-powered' },
    { sku: 'SKU-025', name: 'JARVIS AI Module', category: 'Tech', quantity: 14, minStock: 5, unitPrice: 25000000, lastUpdate: '2025-01-07', updatedBy: 'Tony Stark', note: 'Voice activated' },
    
    // Power Sources
    { sku: 'SKU-026', name: 'Tesseract Power Cell', category: 'Power', quantity: 2, minStock: 1, unitPrice: 99999999, lastUpdate: '2024-12-30', updatedBy: 'Bruce Banner', note: 'Cosmic energy' },
    { sku: 'SKU-027', name: 'Arc Reactor Core v2', category: 'Power', quantity: 41, minStock: 20, unitPrice: 4500000, lastUpdate: '2025-01-11', updatedBy: 'Tony Stark', note: 'Palladium-free' },
    { sku: 'SKU-028', name: 'Wakanda Battle Suit', category: 'Suit', quantity: 12, minStock: 25, unitPrice: 8900000, lastUpdate: '2025-01-10', updatedBy: 'Selina Kyle', note: 'Restock pending' },
    { sku: 'SKU-029', name: 'Bifrost Energy Crystal', category: 'Power', quantity: 7, minStock: 3, unitPrice: 15000000, lastUpdate: '2024-12-28', updatedBy: 'Charles Xavier', note: 'Asgardian' },
    { sku: 'SKU-030', name: 'Pym Particle Container', category: 'Power', quantity: 16, minStock: 8, unitPrice: 8750000, lastUpdate: '2025-01-06', updatedBy: 'Scott Lang', note: 'Volatile' },
    
    // Clothing & Gear
    { sku: 'SKU-031', name: 'Tactical Kevlar Vest', category: 'Clothing', quantity: 189, minStock: 80, unitPrice: 12500, lastUpdate: '2025-01-11', updatedBy: 'Bruce Wayne', note: 'Level IIIA' },
    { sku: 'SKU-032', name: 'Stealth Suit (Black)', category: 'Clothing', quantity: 95, minStock: 40, unitPrice: 45000, lastUpdate: '2025-01-10', updatedBy: 'Natalia Romanova', note: 'Night ops' },
    { sku: 'SKU-033', name: 'Spider-Man Mask', category: 'Clothing', quantity: 156, minStock: 60, unitPrice: 5000, lastUpdate: '2025-01-09', updatedBy: 'Peter Parker', note: 'Breathable fabric' },
    { sku: 'SKU-034', name: 'Avengers Team Jacket', category: 'Clothing', quantity: 234, minStock: 100, unitPrice: 8500, lastUpdate: '2025-01-11', updatedBy: 'Steve Roger', note: 'Merch item' },
    { sku: 'SKU-035', name: 'Asgardian Cape', category: 'Clothing', quantity: 23, minStock: 10, unitPrice: 125000, lastUpdate: '2025-01-05', updatedBy: 'Dick Grayson', note: 'Ceremonial' },
    
    // Specialized Equipment
    { sku: 'SKU-036', name: 'Doctor Strange Cloak', category: 'Equipment', quantity: 4, minStock: 2, unitPrice: 45000000, lastUpdate: '2024-12-15', updatedBy: 'Charles Xavier', note: 'Sentient fabric' },
    { sku: 'SKU-037', name: 'Infinity Gauntlet Glove', category: 'Equipment', quantity: 7, minStock: 15, unitPrice: 75000000, lastUpdate: '2025-01-04', updatedBy: 'Bruce Banner', note: 'Display only' },
    { sku: 'SKU-038', name: 'Eye of Agamotto', category: 'Equipment', quantity: 3, minStock: 1, unitPrice: 99000000, lastUpdate: '2024-11-20', updatedBy: 'Tony Stark', note: 'Mystic artifact' },
    { sku: 'SKU-039', name: 'Falcon Wings EXO-7', category: 'Equipment', quantity: 9, minStock: 5, unitPrice: 12500000, lastUpdate: '2025-01-07', updatedBy: 'Scott Lang', note: 'Flight capable' },
    { sku: 'SKU-040', name: 'Black Widow Batons', category: 'Weapon', quantity: 67, minStock: 30, unitPrice: 35000, lastUpdate: '2025-01-11', updatedBy: 'Natalia Romanova', note: 'Electric shock' },
    
    // Special Items
    { sku: 'SKU-041', name: 'Groot Seedling', category: 'Special', quantity: 18, minStock: 10, unitPrice: 5000000, lastUpdate: '2025-01-08', updatedBy: 'Bruce Banner', note: 'Living organism' },
    { sku: 'SKU-042', name: 'Pym Particles Canister', category: 'Special', quantity: 8, minStock: 20, unitPrice: 45000000, lastUpdate: '2025-01-06', updatedBy: 'Scott Lang', note: 'Reorder urgent' },
    { sku: 'SKU-043', name: 'Vibranium Raw Ore (1kg)', category: 'Material', quantity: 145, minStock: 50, unitPrice: 10000000, lastUpdate: '2025-01-10', updatedBy: 'Selina Kyle', note: 'Wakandan supply' },
    { sku: 'SKU-044', name: 'Adamantium Alloy Sheet', category: 'Material', quantity: 34, minStock: 15, unitPrice: 15000000, lastUpdate: '2025-01-09', updatedBy: 'Bruce Wayne', note: 'Weapon X grade' },
    { sku: 'SKU-045', name: 'Uru Metal Ingot', category: 'Material', quantity: 11, minStock: 5, unitPrice: 25000000, lastUpdate: '2024-12-30', updatedBy: 'Charles Xavier', note: 'Nidavellir forge' },
    { sku: 'SKU-046', name: 'Chitauri Tech Scrap', category: 'Material', quantity: 278, minStock: 100, unitPrice: 125000, lastUpdate: '2025-01-11', updatedBy: 'Tony Stark', note: 'Salvage' },
    { sku: 'SKU-047', name: 'Kree Battle Armor Parts', category: 'Material', quantity: 56, minStock: 25, unitPrice: 450000, lastUpdate: '2025-01-08', updatedBy: 'Bruce Banner', note: 'Alien tech' },
    { sku: 'SKU-048', name: 'Symbiote Sample (Contained)', category: 'Special', quantity: 2, minStock: 1, unitPrice: 50000000, lastUpdate: '2024-12-01', updatedBy: 'Charles Xavier', note: 'HAZARDOUS' },
    { sku: 'SKU-049', name: 'Infinity Stone Replica Set', category: 'Special', quantity: 12, minStock: 5, unitPrice: 99999999, lastUpdate: '2025-01-05', updatedBy: 'Tony Stark', note: 'Display models' },
    { sku: 'SKU-050', name: 'Time Travel GPS Device', category: 'Tech', quantity: 6, minStock: 3, unitPrice: 125000000, lastUpdate: '2025-01-03', updatedBy: 'Bruce Banner', note: 'Quantum realm' }
];

// ORDER MANAGEMENT DATA (40+ orders for 2025)
const orderData = [
    { orderId: 'ORD-2025-1247', date: '2025-01-11', customer: 'Wayne Enterprises', items: 'Vibranium Shield x2', total: 4999998, status: 'Shipped', supervisor: 'Bruce Wayne', coordinator: 'Diana Prince', trackingNo: 'SH-2025-5678' },
    { orderId: 'ORD-2025-1246', date: '2025-01-10', customer: 'Stark Industries', items: 'Arc Reactor MK-50 x1', total: 8999999, status: 'Processing', supervisor: 'Dick Grayson', coordinator: 'Peter Parker', trackingNo: 'Pending' },
    { orderId: 'ORD-2025-1245', date: '2025-01-09', customer: 'Queens High School', items: 'Web Shooter Pro x5', total: 749995, status: 'Delivered', supervisor: 'Selina Kyle', coordinator: 'Miles Morales', trackingNo: 'SH-2025-5645' },
    { orderId: 'ORD-2025-1244', date: '2025-01-08', customer: 'Asgard Embassy', items: 'Mjolnir Replica x1', total: 9999999, status: 'Cancelled', supervisor: 'Bruce Wayne', coordinator: 'Gwen Stacy', trackingNo: 'N/A' },
    { orderId: 'ORD-2025-1243', date: '2025-01-07', customer: 'S.H.I.E.L.D', items: 'Quantum Processor x3', total: 46499997, status: 'Shipped', supervisor: 'Dick Grayson', coordinator: 'Diana Prince', trackingNo: 'SH-2025-5621' },
    { orderId: 'ORD-2025-1242', date: '2025-01-06', customer: 'Avengers Tower', items: 'Nano-Suit Material x2', total: 10599998, status: 'Delivered', supervisor: 'Selina Kyle', coordinator: 'Peter Parker', trackingNo: 'SH-2025-5598' },
    { orderId: 'ORD-2025-1241', date: '2025-01-05', customer: 'X-Mansion', items: 'Cerebro Component x1', total: 25000000, status: 'Shipped', supervisor: 'Bruce Wayne', coordinator: 'Miles Morales', trackingNo: 'SH-2025-5567' },
    { orderId: 'ORD-2025-1240', date: '2025-01-04', customer: 'Baxter Building', items: 'Quantum Processor x1', total: 15499999, status: 'Delivered', supervisor: 'Dick Grayson', coordinator: 'Gwen Stacy', trackingNo: 'SH-2025-5534' },
    
    // December 2024
    { orderId: 'ORD-2024-1239', date: '2024-12-28', customer: 'Oscorp', items: 'Spider Drone x10', total: 950000, status: 'Delivered', supervisor: 'Selina Kyle', coordinator: 'Diana Prince', trackingNo: 'SH-2024-9876' },
    { orderId: 'ORD-2024-1238', date: '2024-12-20', customer: 'Rand Corporation', items: 'Iron Fist Mask x5', total: 375000, status: 'Delivered', supervisor: 'Bruce Wayne', coordinator: 'Peter Parker', trackingNo: 'SH-2024-9845' },
    { orderId: 'ORD-2024-1237', date: '2024-12-15', customer: 'Nelson & Murdock', items: 'Daredevil Billy Club x3', total: 225000, status: 'Delivered', supervisor: 'Dick Grayson', coordinator: 'Miles Morales', trackingNo: 'SH-2024-9812' },
    
    // November 2024
    { orderId: 'ORD-2024-1236', date: '2024-11-25', customer: 'Stark Industries', items: 'Arc Reactor Core v2 x5', total: 22500000, status: 'Delivered', supervisor: 'Selina Kyle', coordinator: 'Gwen Stacy', trackingNo: 'SH-2024-8734' },
    { orderId: 'ORD-2024-1235', date: '2024-11-18', customer: 'Wayne Enterprises', items: 'Utility Belt x20', total: 500000, status: 'Delivered', supervisor: 'Bruce Wayne', coordinator: 'Diana Prince', trackingNo: 'SH-2024-8695' },
    { orderId: 'ORD-2024-1234', date: '2024-11-10', customer: 'Parker Industries', items: 'Web Shooter Pro x15', total: 2249985, status: 'Delivered', supervisor: 'Dick Grayson', coordinator: 'Peter Parker', trackingNo: 'SH-2024-8641' },
    
    // October 2024
    { orderId: 'ORD-2024-1233', date: '2024-10-28', customer: 'Department of Defense', items: 'Captain America Uniform x50', total: 6250000, status: 'Delivered', supervisor: 'Selina Kyle', coordinator: 'Miles Morales', trackingNo: 'SH-2024-7823' },
    { orderId: 'ORD-2024-1232', date: '2024-10-15', customer: 'Wakandan Embassy', items: 'Vibranium Raw Ore x10kg', total: 100000000, status: 'Delivered', supervisor: 'Bruce Wayne', coordinator: 'Gwen Stacy', trackingNo: 'SH-2024-7756' },
    { orderId: 'ORD-2024-1231', date: '2024-10-05', customer: 'S.H.I.E.L.D', items: 'Tactical Kevlar Vest x100', total: 1250000, status: 'Delivered', supervisor: 'Dick Grayson', coordinator: 'Diana Prince', trackingNo: 'SH-2024-7689' },
    
    // September 2024
    { orderId: 'ORD-2024-1230', date: '2024-09-22', customer: 'Avengers Tower', items: 'Iron Man Suit MK-85 x1', total: 45000000, status: 'Delivered', supervisor: 'Selina Kyle', coordinator: 'Peter Parker', trackingNo: 'SH-2024-6912' },
    { orderId: 'ORD-2024-1229', date: '2024-09-14', customer: 'Asgard Embassy', items: 'Stormbreaker Replica x2', total: 24000000, status: 'Delivered', supervisor: 'Bruce Wayne', coordinator: 'Miles Morales', trackingNo: 'SH-2024-6845' },
    { orderId: 'ORD-2024-1228', date: '2024-09-08', customer: 'X-Mansion', items: 'Stealth Suit x25', total: 1125000, status: 'Delivered', supervisor: 'Dick Grayson', coordinator: 'Gwen Stacy', trackingNo: 'SH-2024-6778' },
    
    // August 2024
    { orderId: 'ORD-2024-1227', date: '2024-08-30', customer: 'Oscorp', items: 'Adamantium Alloy Sheet x5', total: 75000000, status: 'Delivered', supervisor: 'Selina Kyle', coordinator: 'Diana Prince', trackingNo: 'SH-2024-5834' },
    { orderId: 'ORD-2024-1226', date: '2024-08-20', customer: 'Rand Corporation', items: 'Wakandan Kimoyo Beads x30', total: 3750000, status: 'Delivered', supervisor: 'Bruce Wayne', coordinator: 'Peter Parker', trackingNo: 'SH-2024-5767' },
    { orderId: 'ORD-2024-1225', date: '2024-08-12', customer: 'Baxter Building', items: 'Pym Particles Canister x2', total: 90000000, status: 'Delivered', supervisor: 'Dick Grayson', coordinator: 'Miles Morales', trackingNo: 'SH-2024-5698' },
    
    // July 2024
    { orderId: 'ORD-2024-1224', date: '2024-07-28', customer: 'Stark Industries', items: 'JARVIS AI Module x3', total: 75000000, status: 'Delivered', supervisor: 'Selina Kyle', coordinator: 'Gwen Stacy', trackingNo: 'SH-2024-4821' },
    { orderId: 'ORD-2024-1223', date: '2024-07-18', customer: 'Wayne Enterprises', items: 'Black Panther Suit x5', total: 62500000, status: 'Delivered', supervisor: 'Bruce Wayne', coordinator: 'Diana Prince', trackingNo: 'SH-2024-4756' },
    { orderId: 'ORD-2024-1222', date: '2024-07-10', customer: 'S.H.I.E.L.D', items: 'Chitauri Tech Scrap x100', total: 12500000, status: 'Delivered', supervisor: 'Dick Grayson', coordinator: 'Peter Parker', trackingNo: 'SH-2024-4689' },
    
    // June 2024
    { orderId: 'ORD-2024-1221', date: '2024-06-25', customer: 'Avengers Tower', items: 'Falcon Wings EXO-7 x4', total: 50000000, status: 'Delivered', supervisor: 'Selina Kyle', coordinator: 'Miles Morales', trackingNo: 'SH-2024-3812' },
    { orderId: 'ORD-2024-1220', date: '2024-06-15', customer: 'Department of Defense', items: 'Repulsor Ray Gauntlet x50', total: 44999950, status: 'Delivered', supervisor: 'Bruce Wayne', coordinator: 'Gwen Stacy', trackingNo: 'SH-2024-3745' },
    { orderId: 'ORD-2024-1219', date: '2024-06-08', customer: 'Parker Industries', items: 'Spider-Man Classic Suit x20', total: 1799980, status: 'Delivered', supervisor: 'Dick Grayson', coordinator: 'Diana Prince', trackingNo: 'SH-2024-3678' },
    
    // May 2024
    { orderId: 'ORD-2024-1218', date: '2024-05-28', customer: 'Oscorp', items: 'Uru Metal Ingot x3', total: 75000000, status: 'Delivered', supervisor: 'Selina Kyle', coordinator: 'Peter Parker', trackingNo: 'SH-2024-2801' },
    { orderId: 'ORD-2024-1217', date: '2024-05-18', customer: 'X-Mansion', items: 'Black Widow Batons x40', total: 1400000, status: 'Delivered', supervisor: 'Bruce Wayne', coordinator: 'Miles Morales', trackingNo: 'SH-2024-2734' },
    { orderId: 'ORD-2024-1216', date: '2024-05-10', customer: 'Wakandan Embassy', items: 'Wakanda Battle Suit x10', total: 89000000, status: 'Delivered', supervisor: 'Dick Grayson', coordinator: 'Gwen Stacy', trackingNo: 'SH-2024-2667' },
    
    // April 2024
    { orderId: 'ORD-2024-1215', date: '2024-04-25', customer: 'Stark Industries', items: 'Time Travel GPS Device x1', total: 125000000, status: 'Delivered', supervisor: 'Selina Kyle', coordinator: 'Diana Prince', trackingNo: 'SH-2024-1789' },
    { orderId: 'ORD-2024-1214', date: '2024-04-15', customer: 'S.H.I.E.L.D', items: 'Avengers Team Jacket x200', total: 1700000, status: 'Delivered', supervisor: 'Bruce Wayne', coordinator: 'Peter Parker', trackingNo: 'SH-2024-1722' },
    { orderId: 'ORD-2024-1213', date: '2024-04-08', customer: 'Baxter Building', items: 'Tesseract Power Cell x1', total: 99999999, status: 'Delivered', supervisor: 'Dick Grayson', coordinator: 'Miles Morales', trackingNo: 'SH-2024-1655' },
    
    // March 2024
    { orderId: 'ORD-2024-1212', date: '2024-03-28', customer: 'Avengers Tower', items: 'Thor Battle Armor x3', total: 26250000, status: 'Delivered', supervisor: 'Selina Kyle', coordinator: 'Gwen Stacy', trackingNo: 'SH-2024-0778' },
    { orderId: 'ORD-2024-1211', date: '2024-03-18', customer: 'Wayne Enterprises', items: 'Iron Man Helmet HUD x10', total: 12500000, status: 'Delivered', supervisor: 'Bruce Wayne', coordinator: 'Diana Prince', trackingNo: 'SH-2024-0711' },
    { orderId: 'ORD-2024-1210', date: '2024-03-10', customer: 'Parker Industries', items: 'Stark Phone x100', total: 1500000, status: 'Delivered', supervisor: 'Dick Grayson', coordinator: 'Peter Parker', trackingNo: 'SH-2024-0644' },
    
    // February 2024
    { orderId: 'ORD-2024-1209', date: '2024-02-25', customer: 'Department of Defense', items: 'Infinity Stone Replica Set x5', total: 499999995, status: 'Delivered', supervisor: 'Selina Kyle', coordinator: 'Miles Morales', trackingNo: 'SH-2024-9767' },
    { orderId: 'ORD-2024-1208', date: '2024-02-15', customer: 'X-Mansion', items: 'Groot Seedling x8', total: 40000000, status: 'Delivered', supervisor: 'Bruce Wayne', coordinator: 'Gwen Stacy', trackingNo: 'SH-2024-9700' }
];
