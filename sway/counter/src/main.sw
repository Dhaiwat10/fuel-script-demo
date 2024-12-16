contract;

use libraries::Counter;

storage {
    count: u64 = 0,
}

impl Counter for Contract {
    #[storage(read)]
    fn get_count() -> u64 {
        storage.count.read()
    }

    #[storage(read, write)]
    fn increment_counter(amount: u64) -> u64 {
        let current = storage.count.read();
        storage.count.write(current + amount);
        storage.count.read()
    }
}
