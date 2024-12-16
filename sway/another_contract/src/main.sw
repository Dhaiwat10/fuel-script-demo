contract;

use libraries::AnotherContract;

storage {
    count: u64 = 0,
}

impl AnotherContract for Contract {
    #[storage(read)]
    fn get_count() -> u64 {
        storage.count.read()
    }

    #[storage(read, write)]
    fn set_count(amount: u64) -> u64 {
        storage.count.write(amount);
        storage.count.read()
    }
}
