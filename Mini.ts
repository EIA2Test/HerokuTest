export module Mini {
    console.log("Immediate call");
    init();
    export function init(): void {
        console.log("Function call");
    }
} 