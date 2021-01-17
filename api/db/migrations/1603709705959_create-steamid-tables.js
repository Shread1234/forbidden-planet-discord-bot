exports.up = (pgm) => {
  pgm.createTable("crystal_isles_steamids", {
    steam_id: "varchar(1000)",
    created_at: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
  }),
    pgm.createTable("ragnarok_steamids", {
      steam_id: "varchar(1000)",
      created_at: {
        type: "timestamp",
        notNull: true,
        default: pgm.func("current_timestamp"),
      },
    }),
    pgm.createTable("abberation_steamids", {
      steam_id: "varchar(1000)",
      created_at: {
        type: "timestamp",
        notNull: true,
        default: pgm.func("current_timestamp"),
      },
    }),
    pgm.createTable("extinction_steamids", {
      steam_id: "varchar(1000)",
      created_at: {
        type: "timestamp",
        notNull: true,
        default: pgm.func("current_timestamp"),
      },
    }),
    pgm.createTable("genesis_steamids", {
      steam_id: "varchar(1000)",
      created_at: {
        type: "timestamp",
        notNull: true,
        default: pgm.func("current_timestamp"),
      },
    }),
    pgm.createTable("valguero_steamids", {
      steam_id: "varchar(1000)",
      created_at: {
        type: "timestamp",
        notNull: true,
        default: pgm.func("current_timestamp"),
      },
    }),
    pgm.createTable("test_steamids", {
      steam_id: "varchar(1000)",
      created_at: {
        type: "timestamp",
        notNull: true,
        default: pgm.func("current_timestamp"),
      },
    }),
    pgm.createTable("center_steamids", {
      steam_id: "varchar(1000)",
      created_at: {
        type: "timestamp",
        notNull: true,
        default: pgm.func("current_timestamp"),
      },
    }),
    pgm.createTable("island_steamids", {
      steam_id: "varchar(1000)",
      created_at: {
        type: "timestamp",
        notNull: true,
        default: pgm.func("current_timestamp"),
      },
    })
}

exports.down = (pgm) => {
  pgm.dropTable("crystal_isles_steamids"),
    pgm.dropTable("ragnarok_steamids"),
    pgm.dropTable("abberation_steamids"),
    pgm.dropTable("extinction_steamids"),
    pgm.dropTable("genesis_steamids"),
    pgm.dropTable("valguero_steamids"),
    pgm.dropTable("test_steamids"),
    pgm.dropTable("center_steamids"),
    pgm.dropTable("island_steamids")
}
