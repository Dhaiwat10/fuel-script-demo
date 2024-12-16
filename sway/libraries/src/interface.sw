library;

abi Counter {
    #[storage(read)]
    fn get_count() -> u64;

    #[storage(read, write)]
    fn increment_counter(amount: u64) -> u64;
}

abi AnotherContract {
    #[storage(read)]
    fn get_count() -> u64;

    #[storage(read, write)]
    fn set_count(amount: u64) -> u64;
}