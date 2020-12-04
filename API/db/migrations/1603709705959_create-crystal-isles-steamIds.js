exports.up = pgm => {
    pgm.createTable('crystal_isles_steamids', {
    steam_id: 'varchar(1000)',
    created_at: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
  })
};

exports.down = pgm => {
  pgm.dropTable('crystal_isles_steamids')
};