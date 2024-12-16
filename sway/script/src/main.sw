script;

use std::logging::log;

use libraries::{Counter, AnotherContract};

configurable {
    COUNTER_CONTRACT_ID: ContractId = ContractId::from(0x0000000000000000000000000000000000000000000000000000000000000000),
    ANOTHER_CONTRACT_ID: ContractId = ContractId::from(0x0000000000000000000000000000000000000000000000000000000000000000),
}

fn main() -> u64 {
    log(COUNTER_CONTRACT_ID);
    log(ANOTHER_CONTRACT_ID);

    let counter = abi(Counter, COUNTER_CONTRACT_ID.into());

    let another_contract = abi(AnotherContract, ANOTHER_CONTRACT_ID.into());

    let count = counter.increment_counter(1);

    let new_count = another_contract.set_count(count);

    return new_count;
}
