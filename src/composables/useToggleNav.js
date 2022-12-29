import { ref } from 'vue'

export default function useToggleNav() {
            
    let open = ref(false)
    
    function toggleNav() {
        open.value = !open.value
    }

    return {
        open,
        toggleNav
    }
}