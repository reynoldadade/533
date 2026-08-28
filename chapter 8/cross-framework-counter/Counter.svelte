<!-- Svelte 5 with runes -->
<script>
  let n = $state(0)
  let isEven = $derived(n % 2 === 0)
</script>

<button onclick={() => n++}>+1</button>
<p>{n} ({isEven ? 'even' : 'odd'})</p>
